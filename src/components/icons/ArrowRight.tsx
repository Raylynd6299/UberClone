import React from "react";
import Svg, { Path, SvgProps } from 'react-native-svg';

export const ArrowRight = ( props: SvgProps ): React.ReactElement => (
    <Svg
        width="24"
        height="24"
        fillRule="evenodd"
        clipRule="evenodd"
        { ...props }
    >
        <Path
            d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"
        />
    </Svg>
);