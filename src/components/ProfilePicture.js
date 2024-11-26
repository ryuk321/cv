import Image from "next/image";

export default function ProfilePicture(){
    return(
        <div className="flex justify-center align-center">
            <div className=" w-40 h-40 rounded-full overflow-hidden shadow-lg mb-4  ">
              <Image
                src="/profile.jpg" // Path to the image in the public folder
                alt="My Profile Picture"
                width={160} // Adjust width
                height={160} // Adjust height
                objectFit="cover" // Ensures the image fits well
              />
            </div>


          </div>

    )
}