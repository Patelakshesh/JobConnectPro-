import React, { useState } from "react";
import Navbar from "./shared/Navbar";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Contact, Mail, Pen } from "lucide-react";
import { Badge } from "./ui/badge";
import { Label } from "./ui/label";
import AppliedJobTable from "./AppliedJobTable";
import UpdateProfileDialog from "./UpdateProfileDialog";
import { useSelector } from "react-redux";
import useGetAppliedJobs from "@/hooks/useGetAppliedJobs";


const skill = ["html", "css", "javascript", "reactjs"]

const isResume = true;
export default function Profile() {
  useGetAppliedJobs();
  const [open, setOpen] = useState(false);
  const {user} = useSelector(store => store.auth)
  return (
    <div>
      <Navbar />
      <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl my-5 p-8">
        <div className="flex justify-between">
          <div className="flex items-center gap-4">
            <Avatar className="h-24 w-24">
              <AvatarImage src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAlAMBEQACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABAYDBQcBAv/EAD0QAAEDAwEFBAUKBQUAAAAAAAEAAgMEBREGEiExQVETYXGBIjJSkbEHFBUjQmKhweHwQ3KC0fEkJZLS4v/EABoBAQADAQEBAAAAAAAAAAAAAAADBAUCAQb/xAAyEQACAgEDAgMHAwQDAQAAAAAAAQIDBBEhMRJBEyJhBTJRgaGx8HGR0SNCweEzUvEU/9oADAMBAAIRAxEAPwDuKAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAwVVXT0cD56qaOGFgy6SRwa0eZXqTb0QI9nu9FeqT53bZe2p9ssEgaQHEbjjPJezhKD6ZLc8TT3RNe9rGlziA0DJJ5Lk9b0Kfd9asinMVsjbO1p9OV+dk/y4+K0afZ7kuqx6GLk+1lCXTUtfUz2bVr7hUNp326V0h4mA7Qb3nOMLm/C8Ja9S+ZJje0/Gl0uD+W5ZYqqGV72Ryse9nrta4Et8VRcWluainGT0TMoOV4dHqAIAgCAIAgCAIAgCAIDV329U9np+0lO3I7dHEDvcfyHep6KJXS0XBVysqGNHWXPZHJflSqKqtFhqaiQ7FRTSP7NuQwODhy64c0ZWliVxhKcV2ZFXdKymFku6Lh8kFTGNIzRvcGimqZNsu3AAgOz+Kp58H436lmqacTU6s1c+7SupKB5bQtOC4bjN/wCe7mruJiKtKU+fsY2dlu3WEPd+/wDoj2i1sfSi43WX5rbgfRd9uc9GD81LbkPq8Otay+xUqxU4+Lc9I/f9DNWagfJCaS2xihoh9iM+m/vc79+a8rxlr12byObsx9Ph1Lpj6c/M+7FarvUysqLc18LRwqHO2W/r7sJkX0RXTPf0PMTFyZy66tvXj/0ulu1Jbn10VonutJPdC07TIM4JHLO8ZxyznuWPOqWjnFeU+orclFKb1fob4KElPUAQBAEAQBAEAQBARbpWw26gmrKk4iibtHHE9AO8ruEHOSiu5HbZGuDnLhHNtYzumukdQSdmopopWjOQ0EcB+PvWzgrStr4M+b9p+a/q7NIwaopfpL5O7dWsG0+3zOY/HsOcW/8AQqOL6MyUX3NLGeuHH02K5YJpvoy622GR7e3ibOGg+v2Zy5vm0k/0qeyKU42Ptt+5w5OUJQX6mysNvpY6N15vOfo+N2xDCNzqqT2R93qf1Xl1snLwq/ef0IKqI6eLb7q+pgr7rV3yvY6QZcT2cFPEMtY3k1oH7/KSuqFMNvmyC6c7p7/JFvobJbtN28XXU8je0G9lP6wDuQwPXd+HxVG3Jsul4dPBfowK6l4l+7+BSdXa4ud824IHOordvb2EbsOePvuHwG7x4qxRhwr3e7LTvcuNkRNMaHv14fFVUcXzKna4OjqpjscOBYOJ5b9w70vyq69U3q/gTRi2jvdBFUQ0cEdbO2eoawCSVjNgPdjednJwsR6a7cFgkrwBAEAQBAEAQBAEBQ/lMrn7FNQDIY7Mr+hI3AfH8Fqeza93MxPa1r8tXZ7lfuLjWaUtda3e+kc+km7ubD7virNX9PInB99ytenZjwn8Nn/g2Ogp4a6C42KrOY6mMvaOfDDsfgfJQZ8XFxtXYtezJJqVT77lL7Crsl4MbwBVUcuDng7H5EfgVdTjdXr2ZXnKVU9O6JerauWrr6UxMDKA07RQQxN3MZwLce1tAg+XcocaKhFp89/z9CxdLxNJLjsXKw2yl0dZzeby3auErcRxfaZkZDB97qeXkqdtk8qzw6+CxXXDFh4lnJRb7cLhqK5iWcOllediCCMEhoPBrR+fNaFVUKI6IpyunbPV8martb9PUNNcOxirJ5yQ2pBEsFM4HGzjg6T+bcOWSoVYr5OHCXbu/wDRb6XVDV8/YtOhNbyF7LbfptvaOIap/HPsvPwPvVfKwtF11r5HdOWtembOmA7gsw0D1AEAQBAEAQBAEAQFS+US2mptDayMZfSuy7+Q8fduPvV7At6bOl9zM9p0ddamuY/YpGlKiKaoqrJVuDae5s2WO5MlbvYfy8gr+WnHS2PMSliaTTqlxL7mqpqqrsl3ZLs7FVSS+kx3Ubi3wIyPNTzjG6vTsyKvqps17oums7fBerbT6jtnptMY7YAby3kT3t4H9Fn4drqsdM/xl7OqVlauh+I1GlKyjpa+nFzibJTxyGWJ7hnsJMY2h3cM+APJWcumU4N188P1RQwsuNU+mzj7Mjapu0t6uDpnlwgjy2GPk0dfE/vgpMahUw07vk5yMqV9mvZcEtumLgNKG42aWKasnB7Xszl7Isb2sPJ/tc+Q76s8mLv6JrZfm/oaWPjtU+JHdv8ANP1K7pu6yWh8tPLCKi31Ho1NG8ei8dQOThj8PdZupVi1T0fZkUcjw9nuu6Jl6skdEYqu3yGptdVvglO8jqx/Qjf7kot69YT2kuSDJh06Si9Yvj+C8aA1C6djbXXybUrB9RI473tH2Seo5d3gqGbjdP8AUgti7gZnX/Sm9+xdwcrONU9QBAEAQBAEAQBAY542zRPikaHMeC1zTzBRPR6o8lFSWjOG6ptc1ju8lMS5oaQ+CQbiW/ZIPUfEL6Gm1XV6/uYE6XTY4/sTLy5uorQ2/wBOG/PacNjucLBvzwbKB0IG/wDQqGp+DZ4T4fBZuh4kfEXPcz6B1Sy1VJt1yePo6pdxfwieeZz9k8/f1XOZjua648o7xbejyy4ZK1Va4bLcjHTSsMMo22Rh3pR55EdOh/spcS921+blGVn4sabPK9nv+hotmSokbHBG+R7jhrGNyT4AK05KK1bK9cG3oiVp7UlTp6tL2bUlK8/X0+ePeOjv8HurZOPG+PqaGLfKmW3BY9VWKkulG3UVh2XskG3OyMbiObgOThzHd3KpiZDrl4VpazaFOHjVfM1WnKqKJsluuA2rbV4EgP8ADdyeOhBx+wreRVJ6WQ95fX0MzGyYxbrs9yX09THV0U9mr3RPfsywu2mSDcCOIcP31Ulc43169mVr4zx7Gnyu51m3SvmoYJZQBI+NrnY6kb189NdMmkfYVScoJvlokrk7CAIAgCAIAgCA8ygK5rbTrdQWstiDRWw5dA88+rT3HHwVnGvdM/R8lfIpVsfVHLLHT3SwXVlbUup6GHeyaGufgzxn1m9mMuPux5LSulXdDSO79O3zK1Wtfv7CastNJWyyWOjfveXRy1gDzEPuM4DHV2T4KSNVko6Wv9v8lSy1R/4l82ZLTQXG/Vro6Zj55C7Msz3ZDe9zj/lSWW10Q3KsKLL5aLf1LufonQdDtvIrLvKzcB6x8PZZnzPestu3Ml8I/n1NSMKcKPxl+fQotdKL8yorGRMiuEe1JNFEMNmj4lzR7TeY5jf1WhBOnSL93t6FV6W+b+7uSdBaq+g7iKWsf/ttS7D9o7oncn+HI+/koszH8SPVHlFrGn0bPhm81TaRarl9S0Cmny+Ich1Hl8CpMO92178oxfaGL4Fu3D4/gzMidfbLC1gLq2ie2E9XxOOBnw/uo3JY1r/6y3+ZKoPMx0v7obfJnSIWCONsbfVaA0eSxW9XqfTRWi0PtD0IAgCAIAgCAICk/KlTXNtkZdLPWVVPNQkulbDIW7cR4kjO/G4+GVaxHDr6ZrVM5nrpscbqNS3ao9CrvVa4HdsuqXAHyB3rYjRXHiKKs233NhaNPXu6uBorZUPa7+I9uw3x2nYC8nkVV8yIHTKT4LxbdA0tvY2p1Rco2NG/5vC7Ge4u4nyHmqcs2dnlpiHj11rquloiZcdWw0VL8x01Ssp4WggSlmMd4b17z7l7VguUuu5/Iq2+04xXRQtPUqNNb7hfbg9kDX1E7ztSyPduaPacTwH7CuznXTDfZFWpWXz0W5OqLhSabidS2GRk9e7dUXEtBaOrIweXfz+FdVyvfVZtHsv5LvXGldMN33f+EVfUUETHRV1IzYpKwEiMfwpBjbZ4AkEdzgpqpNawlyvt2LEUpJSXDL5pm5HU2hZ6SZ23cLSRgni6PeWn/iC3xblU2vAyU17shm1eNjNd1ubP5PqWZ9wmq2ktgZHsHo4nBx5YyuvaM49Kh3M/2PXJ2OxcIv6yD6IIAgCAIAgCAIAgPl7A9ha4AtIwQRxCAoF8p7jpqq7S3Stjonn0C2Fh2D7JJGfBauN4N60kvN9zAzXlYstYT8r/AE2/OxqptRXmYYkuMuPuhrfgArccOlcRM+Wfky2c/t/BEp6asuUpMMU1TITvcMu95P8AdSSnXUt2kQwqtul5U5MnvstHbQJL/WCN3EUdOQ+V3ieDf3vVf/6J27Ux+b4LscOFOjyZaei5NVeL9LUUpoKCFtBbcb4Izkyd73cT4e/KkrxumXXN9UjqeV1R6ILpj8P5Zm0xo2pvTmVFSHU1Bx28YdKOjR07/iosnMjX5Y7stYuLOzzPZFs19pmlm0RPTUFM2M0DfnFO1vIt9Yd5I2vMrOxr5K7qk+eTYdcYw0iuDnfySS1TdWiGCF8tPPA9lTgbmNxkOP8AUAPMq/nKPh6vlPYjim9jttqt0NsooqWnzsMHE8XHmSsmyyVknKR1RTCmChDhExcEwQBAEAQBAEAQBAEBjqIIqiF8U8bZI3jDmuGQV7FuL1RzKMZxcZLVFYu1nnofrrPa7dK0De10A7QeG/BV2q+Nm1smZeRiyq82PXF/LcqtdfbtIDBPUSU4G4xMZ2WPdvWjXi0rzJa/Uxrc7JfllLT0WxFoLDcbo7/S0ztgnfLJ6LfeePlldWZNVfLGPi33e7Hb4suVi0RRUT2z3DFXON4a4fVtPhz81l3507No7I3cf2dCvzT3f0LZgdFSNI+Zo2yxPje3LXtLSOoKA1emtO2/TdubRW6LDd23I/e+U9XHn+SkttlbLqkeKKitjbqM9CAIAgCAIAgCAIAgCAIDwjKAwyUlPK9r5YY3ub6rnMBIXqlJLRM5lCMnq0Zg0DgvDo9QBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAf/2Q==" />
            </Avatar>
            <div>
              <h1 className="font-medium text-xl">{user?.fullName}</h1>
              <p>
               {user?.profile?.bio}
              </p>
            </div>
          </div>
          <Button onClick = {() => setOpen(true)} className="text-right" variant="outline">
            <Pen />
          </Button>
        </div>
        <div className="my-5">
          <div className="flex items-center gap-3 my-2">
            <Mail />
            <span>{user?.email}</span>
          </div>
          <div className="flex items-center gap-3 my-2">
            <Contact />
            <span>{user?.phoneNumber}</span>
          </div>
        </div>
        <div className="my-5">
            <h1>Skill</h1>
            <div className="flex items-center gap-1">
            {
                user?.profile?.skills.length !== 0 ? user?.profile?.skills.map((item,index) => 
                    <Badge key={index}>{item}</Badge>
                ) : <span>NA</span>
            } 
            </div>
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label className='text-md font-bold'>Resume</Label>
            {
                isResume ? <a target="blank" href={user?.profile?.resume} className="text-blue-500 w-full hover:underline cursor-pointer">{user?.profile?.resumeOriginalName}</a> : <span>NA</span>
            }
        </div>
        
      </div>
      <div className="max-w-4xl mx-auto bg-white rounded-2xl">
            <h1 className="font-bold text-lg my-5">Applied Jobs</h1>
            <AppliedJobTable/>
        </div>
        <UpdateProfileDialog open = {open} setOpen = {setOpen}/>
    </div>
  );
}
