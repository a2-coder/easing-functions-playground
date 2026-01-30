type Props = {
    active?: boolean;
}

export const Indicator = ({ children, active = true }: React.PropsWithChildren<Props>) => {
    return (
        <div className="relative">
            {
                active && (
                    <div className="size-4 absolute -top-2 -right-2 flex items-center justify-center text-amber-500">
                        <div className="size-full rounded-full bg-current/20 absolute left-0 top-0 animate-ping z-5" />
                        <div className="size-2 rounded-full bg-current relative z-10" />
                    </div>
                )
            }
            {children}
        </div>
    )
}