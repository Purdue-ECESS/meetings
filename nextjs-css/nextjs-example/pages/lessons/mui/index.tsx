import { Button, Input } from "@mui/material";

export default function Index() {
    const ariaLabel = { 'aria-label': 'description' };
    return (
        <>
            <div>
                <Button>Here is a Mui Button</Button>
            </div>

            <div>
                <Input defaultValue="Hello world" inputProps={ariaLabel} />
            </div>
        </>
    )
}
