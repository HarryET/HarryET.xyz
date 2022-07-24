import Highlight from "react-highlight";

export const Fence: React.FC<React.PropsWithChildren<{
    language: string;
}>> = ({ children, language }) => {
    return (
        <Highlight key={language} className={`language-${language}`}>
            {children}
        </Highlight>
    );
}

export const markdocFence = {
    render: 'Fence',
    attributes: {
        language: {
            type: String,
            description:
                'The programming language of the code block. Place it after the backticks.'
        }
    }
};
