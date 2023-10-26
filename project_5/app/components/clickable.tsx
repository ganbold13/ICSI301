import React from "react";
import Link from "next/link";

interface ClickableProps {
    href: string,
    children: any,
    className: string
}

export default function Clickable({ href, children, className, ...props }: ClickableProps) {
    return (
        <Link href={href || ""}>
            <div {...props} className={className || ""} style={{ cursor: "pointer" }}>
                {children}
            </div>
        </Link>
    );
}