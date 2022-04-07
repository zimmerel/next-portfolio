import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";

export default function ColorModeSwitch() {
  const { toggleColorMode } = useColorMode();
  const otherMode = useColorModeValue("dark", "light");
  const OtherIcon = useColorModeValue(MoonIcon, SunIcon);

  return (
    <IconButton
      aria-label={`Switch to ${otherMode} mode`}
      color="current"
      fontSize="lg"
      icon={<OtherIcon />}
      ml="3"
      onClick={toggleColorMode}
      size="md"
      variant="ghost"
    />
  );
}
