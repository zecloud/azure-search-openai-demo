import { Example } from "./Example";

import styles from "./Example.module.css";

export type ExampleModel = {
    text: string;
    value: string;
};

const EXAMPLES: ExampleModel[] = [
    {
        text: "Y a t'il un article sur les Azure Functions ?",
        value: "Y a t'il un article sur les Azure Functions ?"
    },
    { text: "Quels sont les contributeurs du magazine Programmez ?", value: "Quels sont les contributeurs du magazine Programmez ?" },
    { text: "Qui est le rédacteur en chef du magazine ?", value: "Qui est le rédacteur en chef du magazine ?" }
];

interface Props {
    onExampleClicked: (value: string) => void;
}

export const ExampleList = ({ onExampleClicked }: Props) => {
    return (
        <ul className={styles.examplesNavList}>
            {EXAMPLES.map((x, i) => (
                <li key={i}>
                    <Example text={x.text} value={x.value} onClick={onExampleClicked} />
                </li>
            ))}
        </ul>
    );
};
