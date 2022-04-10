import Image from 'next/image'
import picture from '../../../public/picture.png'

export default function Index() {
    return (
        <div>
            <Image
                src={picture}
                alt="Picture of the author"
            />
        </div>
    )
}
