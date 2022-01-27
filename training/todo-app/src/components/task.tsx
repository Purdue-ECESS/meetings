import { Button, Card, CardContent } from "@mui/material";
import { updateTask } from "../utils";

export function Tasks({item, refreshList}: any) {
    return (
        <Card>
            <CardContent style={{display: "flex"}}>
                <div style={{flex: 1}}>
                    {item.name}
                </div>
                <Button onClick={async () => {
                    await updateTask({action: "delete", id: item.id});
                    if (refreshList) {
                        refreshList();
                    }
                }}>
                    Delete
                </Button>
            </CardContent>
        </Card>

    )

}