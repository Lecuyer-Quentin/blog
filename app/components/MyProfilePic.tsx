import Image from "next/image"

export default function MyProfilePic() {

  return (
    <section className="flex justify-center items-center mt-10">
        <Image
            src="/images/profile.png"
            alt="Picture of the author"
            width={200}
            height={100}
            priority={true}
            className="rounded-full border-4 border-red-600 shadow-md"
        />
    </section>

  )
}
