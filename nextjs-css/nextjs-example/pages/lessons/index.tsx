import Link from "next/link";

export default function Index() {
    return (
        <div>
            <ol>
                <li><Link href={"/lessons/inline-style"}>Inline Style</Link></li>
                <li><Link href={"/lessons/sass-style"}>Sass Style</Link></li>
                <li><Link href={"/lessons/center-vertical"}>Center Vertical</Link></li>
                <li><Link href={"/lessons/flex"}>Flex</Link></li>
                <li><Link href={"/lessons/image"}>Image</Link></li>
                <li><Link href={"/lessons/mui"}>MUI</Link></li>
                <li><Link href={"/lessons/nav-bar"}>Navigation Bar</Link></li>
                <li><Link href={"/lessons/iterate-list"}>Iterate List</Link></li>
            </ol>
        </div>
    )
}
