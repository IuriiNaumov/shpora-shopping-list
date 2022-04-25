import React from 'react';

interface PropsType {
    onClick?: () => void;
    className?: string;
}

// Есть вариант как с React.FC<React.HTMLProps<HTMLButtonElement>>? Искал, но чёт не получилось.
export const FilterIcon: React.FC<PropsType> = (props) => {
    return (
        <svg onClick={props.onClick} width="18" height="19" viewBox="0 0 18 19" fill="none">
            <path
                d="M15.1315 1H2.86852C2.06982 1 1.59343 1.89015 2.03647 2.5547L6.83205 9.74808C6.94156 9.91234 7 10.1054 7 10.3028V16.382C7 17.1253 7.78231 17.6088 8.44721 17.2764L10.4472 16.2764C10.786 16.107 11 15.7607 11 15.382V10.3028C11 10.1054 11.0584 9.91234 11.1679 9.74808L15.9635 2.5547C16.4066 1.89015 15.9302 1 15.1315 1Z"
                stroke="#000000" strokeWidth="2"/>
        </svg>
    );
};

export const SortIcon: React.FC<PropsType> = (props) => {
    return (
        <svg onClick={props.onClick} width="20" height="18" viewBox="0 0 20 18" fill="none">
            <path fillRule="evenodd" clipRule="evenodd"
                  d="M4 0.5C4.55228 0.5 5 0.947715 5 1.5V14.0858L6.29289 12.7929C6.68342 12.4024 7.31658 12.4024 7.70711 12.7929C8.09763 13.1834 8.09763 13.8166 7.70711 14.2071L4.70711 17.2071C4.31658 17.5976 3.68342 17.5976 3.29289 17.2071L0.292893 14.2071C-0.0976311 13.8166 -0.0976311 13.1834 0.292893 12.7929C0.683418 12.4024 1.31658 12.4024 1.70711 12.7929L3 14.0858V1.5C3 0.947715 3.44772 0.5 4 0.5ZM9 1.5C9 0.947715 9.44771 0.5 10 0.5H19C19.5523 0.5 20 0.947715 20 1.5C20 2.05228 19.5523 2.5 19 2.5H10C9.44771 2.5 9 2.05228 9 1.5ZM10 5.5C9.44771 5.5 9 5.94772 9 6.5C9 7.05228 9.44771 7.5 10 7.5H17C17.5523 7.5 18 7.05228 18 6.5C18 5.94772 17.5523 5.5 17 5.5H10ZM9 11.5C9 10.9477 9.44771 10.5 10 10.5H15C15.5523 10.5 16 10.9477 16 11.5C16 12.0523 15.5523 12.5 15 12.5H10C9.44771 12.5 9 12.0523 9 11.5ZM10 15.5C9.44771 15.5 9 15.9477 9 16.5C9 17.0523 9.44771 17.5 10 17.5H13C13.5523 17.5 14 17.0523 14 16.5C14 15.9477 13.5523 15.5 13 15.5H10Z"
                  fill="#000000"/>
        </svg>
    );
}

export const AddNewItemIcon = () => {
    return (
        <svg width="46" height="46" viewBox="0 0 46 46" fill="none">
            <path d="M23 3V23M23 23V43M23 23H3M23 23H43" stroke="#ffffff" strokeWidth="6"
                  strokeLinecap="round"/>
        </svg>
    );
};

export const ArrowIcon: React.FC<PropsType> = (props) => {
    return (
        <svg className={props.className} width="12" height="8"
             viewBox="0 0 12 8" fill="none">
            <path d="M11 1.75L6 7L0.999999 1.75" stroke="#8d8d8d" strokeWidth="2" strokeLinecap="round"
                  strokeLinejoin="round"/>
        </svg>
    );
};

export const ArrowBackIcon: React.FC<PropsType> = (props) => {
    return (
        <svg onClick={props.onClick} width="16" height="12" viewBox="0 0 16 12" fill="none">
            <path d="M15 6H1M1 6L6.25 1M1 6L6.25 11" stroke="#000000" strokeWidth="2" strokeLinecap="round"
                  strokeLinejoin="round"/>
        </svg>
    );
};

export const KebabIcon: React.FC<PropsType> = () => {
    return (
        <svg width="26" height="16" viewBox="0 0 26 6" fill="none">
            <path fillRule="evenodd" clipRule="evenodd"
                  d="M3 -4.41063e-07C4.65685 -4.21305e-07 6 1.34315 6 3C6 4.65685 4.65685 6 3 6C1.34315 6 1.60169e-08 4.65685 3.57746e-08 3C5.55324e-08 1.34315 1.34315 -4.6082e-07 3 -4.41063e-07ZM13 1.55023e-07C14.6569 1.74781e-07 16 1.34315 16 3C16 4.65685 14.6569 6 13 6C11.3431 6 10 4.65685 10 3C10 1.34315 11.3431 1.35266e-07 13 1.55023e-07ZM26 3C26 1.34315 24.6569 -1.82807e-07 23 -2.02565e-07C21.3431 -2.22323e-07 20 1.34315 20 3C20 4.65685 21.3431 6 23 6C24.6569 6 26 4.65685 26 3Z"
                  fill="#000000"/>
        </svg>
    );
};

export const EditIcon = () => {
    return (
        <svg width="26" height="26"
             viewBox="0 0 19 19" fill="none">
            <path fillRule="evenodd" clipRule="evenodd"
                  d="M6.25175 0.837532C5.47746 0.0632403 4.49514 -0.115265 3.59853 0.0640591C2.73683 0.236397 1.94243 0.732641 1.33753 1.33753C0.732643 1.94242 0.236398 2.73683 0.0640594 3.59852C-0.115265 4.49514 0.0632406 5.47745 0.837532 6.25174L10.3375 15.7517C10.4473 15.8615 10.5811 15.9442 10.7284 15.9933L16.7284 17.9933C17.0878 18.1131 17.4839 18.0196 17.7518 17.7517C18.0196 17.4839 18.1131 17.0877 17.9933 16.7284L15.9933 10.7284C15.9442 10.5811 15.8615 10.4473 15.7517 10.3375L6.25175 0.837532ZM2.25175 4.83753C2.02604 4.61182 1.95454 4.34413 2.02522 3.99075C2.10288 3.60245 2.35664 3.14685 2.75175 2.75175C3.14686 2.35664 3.60245 2.10288 3.99076 2.02522C4.34414 1.95454 4.61183 2.02604 4.83753 2.25174L5.63043 3.04464L3.04464 5.63043L2.25175 4.83753ZM4.45886 7.04464L11.5848 14.1706L15.4635 15.4635L14.1706 11.5848L7.04464 4.45885L4.45886 7.04464Z"
                  fill="#FFFFFF"/>
        </svg>
    );
};

export const DeleteIcon = () => {
    return (
        <svg width="20" height="26" viewBox="0 0 14 18" fill="none">
            <path fillRule="evenodd" clipRule="evenodd"
                  d="M6.44152 0C5.15023 0 4.00381 0.82629 3.59547 2.05132L3.27924 3H2H1C0.447715 3 0 3.44772 0 4C0 4.55228 0.447715 5 1 5V17C1 17.5523 1.44772 18 2 18H12C12.5523 18 13 17.5523 13 17V5C13.5523 5 14 4.55228 14 4C14 3.44772 13.5523 3 13 3H12H10.7208L10.4045 2.05132C9.99619 0.82629 8.84977 0 7.55848 0H6.44152ZM11 5H10H4H3V16H11V5ZM8.61257 3L8.50716 2.68377C8.37105 2.27543 7.98891 2 7.55848 2H6.44152C6.01109 2 5.62895 2.27543 5.49284 2.68377L5.38743 3H8.61257Z"
                  fill="#FFFFFF"/>
        </svg>
    );
};

export const DownloadIcon: React.FC<PropsType> = (props) => {
    return (
        <svg onClick={props.onClick} className={props.className} viewBox="0 0 18 18" fill="none">
            <path fillRule="evenodd" clipRule="evenodd"
                  d="M5.29289 3.29289C4.90237 3.68342 4.90237 4.31658 5.29289 4.70711C5.68342 5.09763 6.31658 5.09763 6.70711 4.70711L8 3.41421V13C8 13.5523 8.44771 14 9 14C9.55228 14 10 13.5523 10 13V3.41421L11.2929 4.70711C11.6834 5.09763 12.3166 5.09763 12.7071 4.70711C13.0976 4.31658 13.0976 3.68342 12.7071 3.29289L9.70711 0.292894C9.31658 -0.0976312 8.68342 -0.0976312 8.29289 0.292894L5.29289 3.29289ZM18 11C18 10.4477 17.5523 10 17 10C16.4477 10 16 10.4477 16 11V16L2 16L2 11C2 10.4477 1.55229 10 1 10C0.447716 10 0 10.4477 0 11V17C0 17.5523 0.447715 18 1 18H17C17.5523 18 18 17.5523 18 17V11Z"/>
        </svg>
    );
};

