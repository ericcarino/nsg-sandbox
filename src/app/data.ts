export interface VirtualMachineGroup {
  name: string;
  virtualMachines: number[];
  servicesProvided: string[];
  servicesConsumed: string[];
}

export interface VirtualMachine {
  id: number;
  name: string;
  data: string;
  ccrs: Array<{
    name: string;
    state: string;
  }>;
}

export interface Service {
  name: string;
  protocol: string;
  port: number;
}

export interface ServiceAccessPolicy {
  services: number[];
}

export enum ServiceKey {
  FTP = 'ftp',
  SSH = 'ssh',
  SMTP = 'smtp',
  DNS = 'dns',
  HTTP = 'http',
  NTP = 'ntp',
  BGP = 'bgp',
}

export const VirtualMachines: VirtualMachine[] = [
  {
    id: 1,
    name: 'EC2 #1',
    data: '',
    ccrs: [
      {
        name: 'AWS_EIP',
        state: 'DEPLOYED',
      },
    ],
  },
  {
    id: 2,
    name: 'EC2 #2',
    data: '',
    ccrs: [
      {
        name: 'AWS_EIP',
        state: 'DEPLOYED',
      },
    ],
  },
  {
    id: 3,
    name: 'EC2 #3',
    data: '',
    ccrs: [
      {
        name: 'AWS_EIP',
        state: 'DEPLOYED',
      },
    ],
  },
  {
    id: 4,
    name: 'VM #1',
    data: '',
    ccrs: [
      {
        name: 'AZURERM_PUBLIC_IP',
        state: 'DEPLOYED',
      },
    ],
  },
  {
    id: 5,
    name: 'VM #2',
    data: '',
    ccrs: [
      {
        name: 'AZURERM_PUBLIC_IP',
        state: 'DEPLOYED',
      },
    ],
  },
];

export const VirtualMachineGroups: VirtualMachineGroup[] = [
  {
    name: 'My VM Group #1',
    virtualMachines: [1, 4],
    servicesProvided: ['ssh'],
    servicesConsumed: ['ssh'],
  },
  {
    name: 'My VM Group #2',
    virtualMachines: [2],
    servicesProvided: ['ftp'],
    servicesConsumed: ['ftp'],
  },
];

export const Services: { [key: string]: Service } = {};
Services[ServiceKey.FTP] = {
  name: 'File Transfer Protocol',
  protocol: ServiceKey.FTP,
  port: 21,
};
Services[ServiceKey.SSH] = {
  name: 'Secure Shell',
  protocol: ServiceKey.SSH,
  port: 22,
};
Services[ServiceKey.SMTP] = {
  name: 'Simple Mail Transfer Protocol',
  protocol: ServiceKey.SMTP,
  port: 25,
};
Services[ServiceKey.DNS] = {
  name: 'Domain Name System',
  protocol: ServiceKey.DNS,
  port: 53,
};
Services[ServiceKey.HTTP] = {
  name: 'Hypertext Transfer Protocol',
  protocol: ServiceKey.HTTP,
  port: 80,
};
Services[ServiceKey.NTP] = {
  name: 'Network Time Protocol',
  protocol: ServiceKey.NTP,
  port: 123,
};
Services[ServiceKey.BGP] = {
  name: 'Border Gateway Protocol',
  protocol: ServiceKey.BGP,
  port: 179,
};

export const ELEMENT_DATA = [];
