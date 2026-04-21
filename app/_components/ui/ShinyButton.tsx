import Link from "next/link";
import type {
	AnchorHTMLAttributes,
	ButtonHTMLAttributes,
	ReactNode,
} from "react";
import { cn } from "@/app/_lib/utils";

const baseClassName =
	"self-start relative z-10 inline-flex gap-2.5 h-12 animate-shimmer items-center justify-center rounded-md border border-dark-700 bg-[linear-gradient(110deg,#1A1A1A,45%,#262626,55%,#1A1A1A)] hover:bg-[linear-gradient(110deg,#262626,45%,#404040,55%,#262626)] bg-[length:200%_100%] px-6 font-medium text-sm sm:text-base text-slate-200 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50 motion-reduce:animate-none";

type CommonProps = {
	children: ReactNode;
	icon?: ReactNode;
	iconPosition?: "left" | "right";
	className?: string;
};

type ButtonProps = CommonProps &
	ButtonHTMLAttributes<HTMLButtonElement> & {
		href?: undefined;
	};

type AnchorProps = CommonProps &
	Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
		href: string;
		external?: boolean;
	};

export type ShinyButtonProps = ButtonProps | AnchorProps;

const ShinyButton = (props: ShinyButtonProps) => {
	const iconPosition = props.iconPosition ?? "right";
	const { children, icon, className } = props;

	const content = (
		<>
			{iconPosition === "left" && icon}
			{children}
			{iconPosition === "right" && icon}
		</>
	);

	if ("href" in props && props.href !== undefined) {
		const {
			href,
			external,
			icon: _icon,
			iconPosition: _iconPos,
			children: _children,
			className: _className,
			...rest
		} = props as AnchorProps;
		const isExternal =
			external ?? (typeof href === "string" && /^(https?:)?\/\//.test(href));

		return (
			<Link
				href={href}
				className={cn(baseClassName, className)}
				{...(isExternal
					? { target: "_blank", rel: "noopener noreferrer" }
					: {})}
				{...rest}
			>
				{content}
			</Link>
		);
	}

	const {
		href: _href,
		icon: _icon,
		iconPosition: _iconPos,
		children: _children,
		className: _className,
		...buttonRest
	} = props as ButtonProps & { href?: undefined };

	return (
		<button
			type={buttonRest.type ?? "button"}
			className={cn(baseClassName, className)}
			{...buttonRest}
		>
			{content}
		</button>
	);
};

export default ShinyButton;
