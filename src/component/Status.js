import StatusReact from "./StatusReact";
import Container_ from "./Container_";

export default function Status(props) {
    return (
        <Container_>
            <h2>{props.title}</h2>
            <p>
                Bangaldesh is my motherland. Proud to be bangadeshi. Islam is
                our religion. Love islam more than life
            </p>
            <StatusReact />
        </Container_>
    );
}
