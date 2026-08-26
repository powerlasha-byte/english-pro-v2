import { directMethod3Data } from "@/app/data/directMethod3";

export function getUnitData(id: string | number) {
  const unit =
    directMethod3Data[
      Number(id) as keyof typeof directMethod3Data
    ];

  return unit ?? directMethod3Data[1];
}