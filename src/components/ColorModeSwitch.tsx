import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";

export default function ColorModeSwitch() {
  const { toggleColorMode } = useColorMode();
  const otherMode = useColorModeValue("dark", "light");
  const OtherIcon = useColorModeValue(MoonIcon, SunIcon);

  return (
    <IconButton
      size="md"
      fontSize="lg"
      aria-label={`Switch to ${otherMode} mode`}
      variant="ghost"
      color="current"
      ml="3"
      onClick={toggleColorMode}
      icon={<OtherIcon />}
    />
  );
}
