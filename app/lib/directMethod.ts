import { directMethodData } from "@/app/data/directMethod";

export function getUnitData(id: string | number) {
  const unit =
    directMethodData[
      Number(id) as keyof typeof directMethodData
    ];

  return unit ?? directMethodData[1];
}