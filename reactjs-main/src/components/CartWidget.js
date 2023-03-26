import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge } from "@mui/material";

const CartWidget = () => {
    return (
        <>
            <Badge badgeContent={1} color="info">
                <ShoppingCartIcon style={{ color: "white" }} />
            </Badge>
        </>
    );
};

export default CartWidget;