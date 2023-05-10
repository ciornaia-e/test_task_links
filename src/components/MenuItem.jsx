const MenuItem = (props) => {
    return (
        <li>
            <a href="/" class="relative uppercase font-display text-base py-1">
                <span class="link link-underline link-underline-black text-black">
                    {props.title}
                </span>
            </a>
        </li>
    )
};

export default MenuItem;