export class DisplayColumns {
  public text!: string;
  public key!: string;
  public checkCustomColor?: boolean;
  public type?: TableData;
  public actions?: DisplayAction[];
}

export class DisplayAction {
  public icon!: string;
  public tooltip!: string;
  public action?: (row: any) => void;
}

type TableData = 'commom' | 'currency' | 'document' | 'phone' | 'longText' | 'date';
