import Link from "next/link";

export default function Navbar() {
    return (
        <>
            <nav>
                <Link href="/">خانه</Link>
                <div className="dropdown">
                    <button className="dropbtn">ثبت اطلاعات</button>
                    <div className="dropdown-content">
                        <Link href="#">ماشین آلات</Link>
                        <Link href="#">صنایع</Link>
                        <Link href="#">دستگاه‌ها</Link>
                    </div>
                </div>
            </nav>
        </>
    )
}
