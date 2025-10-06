import { Box, Drawer, List, ListItem } from "@mui/material";
import TypographyText from "../TypographyText/TypographyText";
import CloseButton from "../CloseButton/CloseButton";
import {
  drawerBaseStyles,
  drawerMobileStyles,
  wishlistItemsStyles,
} from "./drawer.styles";
import Button from "../Button/Button";

interface WishlistItems {
  id: number;
  title: string;
  description: string;
  link: string;
  price: string;
}

interface DrawerProps {
  isOpen: boolean;
  isMobile: boolean;
  onClose: () => void;
  anchor: "top" | "right" | "bottom" | "left";
}

// dummy data so something can load
const wishlists: WishlistItems[] = [
  {
    id: 1,
    title: "New Headphones",
    description: "Wireless noise-cancelling headphones for music and work.",
    link: "https://example.com/headphones",
    price: "$199",
  },
  {
    id: 2,
    title: "Travel Backpack",
    description: "Durable 40L travel backpack with USB charging port.",
    link: "https://example.com/backpack",
    price: "$89",
  },
  {
    id: 3,
    title: "Cookbook",
    description: "A cookbook with 100 easy and healthy recipes.",
    link: "https://example.com/cookbook",
    price: "$25",
  },
  {
    id: 4,
    title: "Smartwatch",
    description: "Fitness tracking smartwatch with heart rate monitor.",
    link: "https://example.com/smartwatch",
    price: "$149",
  },
  {
    id: 5,
    title: "Art Supplies Kit",
    description: "Complete art kit with brushes, paints, and sketch pads.",
    link: "https://example.com/art-supplies",
    price: "$59",
  },
];

export default function WishlistDrawer({
  isOpen,
  onClose,
  isMobile,
}: DrawerProps) {
  const DrawerList = (
    <Box>
      <List>
        {isMobile ? "" : <CloseButton onClose={onClose} />}
        <div className="mt-[3rem] px-3 text-center">
          <TypographyText text={`<name's> Wishlist`} variant="h4" />
        </div>
        {wishlists.map((item) => (
          <ListItem sx={wishlistItemsStyles} key={item.id}>
            {item.title}
          </ListItem>
        ))}
      </List>
      {isMobile && (
        <div className="flex justify-center items-center pt-[2rem]">
          <Button
            type="button"
            handleClick={onClose}
            content="Close"
            variant="secondary"
          />
        </div>
      )}
    </Box>
  );

  return (
    <div>
      <Drawer
        sx={isMobile ? drawerMobileStyles : drawerBaseStyles}
        anchor={isMobile ? "bottom" : "right"}
        open={isOpen}
        onClose={onClose}
      >
        {DrawerList}
      </Drawer>
    </div>
  );
}
