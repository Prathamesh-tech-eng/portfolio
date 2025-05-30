import {clsx} from 'clsx'; // clsx is a utility for constructing className strings conditionally
import {twMerge} from 'tailwind-merge'; // tailwind merge is a utility for merging Tailwind CSS class names

export const cn = (...inputs) => {
    return twMerge(clsx(inputs));
     // this function combines clsx and tailwind merge to create a single class name string
// this classname (cn = classnames) function uses tailwind merge to combine class names
// without writting them a lot of classnames in a single line
}