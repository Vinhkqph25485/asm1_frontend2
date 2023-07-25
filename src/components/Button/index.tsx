import React from "react";

type ButtonProps = {
    type?: "primary" | "danger"
    loading?: boolean;
    shape?: "round" | "circle" | "default";
    icon?: React.ReactNode;
    children: React.ReactNode;
    onClick?: () => void
};

const Button = ({type, children,icon, shape, onClick}: ButtonProps) => {
    return (
        <button
        onClick={onClick}
            className={`border p-2 rounded border-gray-500
                ${type === "primary" && "text-white bg-blue-500 hover:bg-blue-800" }
                ${type === "danger" && "text-white bg-red-500 hover:bg-red-800" }
                ${shape === "default" && "rounded-md"}
                ${shape === "circle" && "rounded-full w-5 h-5"}
                ${shape === "default" && "rounded-full"}
            `}
        >
            {icon && icon}
            {children && children}
        </button>
    );
};

export default Button;
