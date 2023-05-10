export const LOCATIONS = ["Sector-54", "Sector-54", "Sector-54"];

export const CAR_MODELS = ["Model 1", "Model 2", "Model 3", "Model 4", "Model 5", "Model 6", "Model 7"];

export const ACCORDION_DATA: AccordionDataType = [
  {
    heading: "ELECTRICAL",
    options: ["Horn Pad Not working", "Head lamps / Fog lamp not working", "Power Window Not Working", "Tail lamp (LH/RH) not working"],
  },
  {
    heading: "STEERING",
    options: ["Steering Unusual noisy", "Steering Remote Switch", "Steering Wobbling - Wobbling / Pulling", "Sticky ignition key"],
  },
  {
    heading: "ENGINE",
    options: ["Engine Noise", "Engine overheating", "Fan Belt Noise", "Poor Pickup while A/c ON"],
  },
];

export type AccordionDataType = {
  heading: string;
  options: string[];
}[];
