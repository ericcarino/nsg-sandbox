export interface VirtualMachineGroup {
  name: string;
  virtualMachines: number[];
  servicesProvided?: string[];
  servicesConsumed?: string[];
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

export interface Application {
  name: string;
  protocol: string;
  port: number;
}

export interface Service {
  id: number;
  application: ApplicationKey;
  groups: VirtualMachineGroup[];
}

export interface ServiceAccessPolicy {
  id: number;
  services: number[];
  groups: VirtualMachineGroup[];
}

export enum ApplicationKey {
  FTP = 'ftp',
  SSH = 'ssh',
  SMTP = 'smtp',
  DNS = 'dns',
  HTTP = 'http',
  NTP = 'ntp',
  BGP = 'bgp',
}

export const VirtualMachines: VirtualMachine[] = [];
for (let i = 0; i < 100; i++) {
  VirtualMachines.push({
    id: i,
    name: `EC2 #${i}`,
    data: '',
    ccrs: [
      {
        name: 'AWS_EIP',
        state: 'DEPLOYED',
      },
    ],
  });
}

export const VirtualMachineGroups: VirtualMachineGroup[] = [
  {
    name: 'My VM Group #1',
    virtualMachines: [1, 4],
    servicesProvided: ['ssh'],
  },
  {
    name: 'My VM Group #2',
    virtualMachines: [2],
    servicesConsumed: ['ftp'],
  },
];

export const Applications: { [key: string]: Application } = {};
Applications[ApplicationKey.FTP] = {
  name: 'File Transfer Protocol',
  protocol: ApplicationKey.FTP,
  port: 21,
};
Applications[ApplicationKey.SSH] = {
  name: 'Secure Shell',
  protocol: ApplicationKey.SSH,
  port: 22,
};
Applications[ApplicationKey.SMTP] = {
  name: 'Simple Mail Transfer Protocol',
  protocol: ApplicationKey.SMTP,
  port: 25,
};
Applications[ApplicationKey.DNS] = {
  name: 'Domain Name System',
  protocol: ApplicationKey.DNS,
  port: 53,
};
Applications[ApplicationKey.HTTP] = {
  name: 'Hypertext Transfer Protocol',
  protocol: ApplicationKey.HTTP,
  port: 80,
};
Applications[ApplicationKey.NTP] = {
  name: 'Network Time Protocol',
  protocol: ApplicationKey.NTP,
  port: 123,
};
Applications[ApplicationKey.BGP] = {
  name: 'Border Gateway Protocol',
  protocol: ApplicationKey.BGP,
  port: 179,
};

export const ELEMENT_DATA = [];
