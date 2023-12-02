import Image from "next/image"

export default function MyProfilePic() {

  return (
    <div className="flex justify-center items-center ml-4">
        <Image
            src="/images/profile.png"
            alt="Picture of the author"
            width={50}
            height={50}
            priority={true}
            className="rounded-full border-4 border-red-600 shadow-md"
        />
    </div>

  )
}
