import React, {FC} from 'react';
import {CustomArrowProps} from "react-slick";

interface SliderArrowProps extends CustomArrowProps {
    iconClassName: string;
}

const SliderArrow: FC<SliderArrowProps> = ({iconClassName, className, ...props}) => {
    return (
        <div className={iconClassName + " " + className} {...props}/>
    );
};

export default SliderArrow;