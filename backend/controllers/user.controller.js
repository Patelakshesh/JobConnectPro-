import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"
import getDataUri from "../utiles/dataUri.js";
import cloudinary from "../utiles/cloudinary.js";
export const register = async (req, res) => {
  try {
    const { fullName, email, phoneNumber, password, role } = req.body;
    if (!fullName || !email || !phoneNumber || !password || !role) {
      return res.status(400).json({
        message: "something is missing",
        success: false,
      });
      
    }

    const file = req.file;
    const fileUri = getDataUri(file);
    const cloudResponse = await cloudinary.uploader.upload(fileUri.content)

    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({
        message: "user already exist with this email",
        success: false,
      });
    }
    const hashPassword = await bcrypt.hash(password, 10);

    await User.create({
      fullName,
      email,
      phoneNumber,
      password: hashPassword,
      role,
      profile: {
        profilePhoto: cloudResponse.secure_url,
      }
    });

    return res.status(201).json({
        message:"Account created successfully",
        success: true
    })
  } catch (error) {
    console.log(error)
  }
};

export const login = async (req, res) => {
  try {
    const { email, password, role } = req.body;

    if (!email || !password || !role) {
      return res.status(400).json({
        message: "something is missing",
        success: false,
      });
    }
    let user = await User.findOne({ email});

    if (!user) {
      return res.json(400).json({
        message: "incorrect email or password",
        success: false,
      });
    }
    const isPasswordmatch = await bcrypt.compare(password, user.password);
    if (!isPasswordmatch) {
      return res.status(400).json({
        message: "incorrect email or password",
        success: false,
      });
    }
    if (role != user.role) {
      return res.status(400).json({
        message: "Account doesn't exist with current role.",
        success: false,
      });
    }
    const tokenData = {
        userId: user._id
    }
    const token = await jwt.sign(tokenData, process.env.SECRET_KEY, { expiresIn: '1d' });

    user = {
        _id: user._id,
        fullName: user.fullName,
        email: user.email,
        phoneNumber: user.phoneNumber,
        role: user.role,
        profile: user.profile,
    }

    return res.status(200).cookie("token", token, {maxAge:1*24*60*60*1000, httpOnly:true, sameSite: 'strict'}).json({
        message: `Welcome back ${user.fullName}`,
        user,
        success: true
    })
  } catch (error) {
    console.log(error);
  }
};

export const logout = async (req, res) => {
    try{
        return res.status(200).cookie("token", "", {maxAge:0}).json({
            message: "Logout successfully",
            success: true
        })
    }catch(error){
        console.log(error)
    }
}

export const updateProfile = async (req, res) => {
    try {
        const {fullName, email, phoneNumber, bio, skills} = req.body;
        const file = req.file;
        if (!file) {
          return res.status(400).json({
              message: "No file uploaded",
              success: false
          });
      }
        const fileUri = getDataUri(file);
        // console.log("File URI Content:", fileUri);
        const cloudResponse = await cloudinary.uploader.upload(fileUri.content,{
          resource_type: "raw", 
          format: "pdf", 
      })
        console.log("response", cloudResponse)
        let skillsArray;
          if(skills){
            skillsArray = skills.split(",")
          }
          const userId = req.id;
          let user = await User.findById(userId);

          if(!user){
            return res.status(400).json({
                message: "User not found",
                success: false
            })
          }
          if(fullName)  user.fullName = fullName
          if(email)   user.email = email
          if(phoneNumber)  user.phoneNumber = phoneNumber
          if(bio) user.profile.bio = bio
          if(skills) user.profile.skills = skillsArray
          if(cloudResponse){ 
            user.profile.resume = cloudResponse.secure_url //set the cloudinary url
            user.profile.resumeOriginalName = file.originalname //save the original file name 
          }
          await user.save();

          user = {
            _id: user._id,
            fullName: user.fullName,
            email: user.email,
            phoneNumber: user.phoneNumber,
            role: user.role,
            profile: user.profile,
        }
        return res.status(201).json({
            message: "Profile updated successfully",
            user,
            success: true
        })
    } catch (error) {
        console.log(error)
    }
}
