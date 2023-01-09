export interface VirtualMachineGroup {
  id: number;
  name: string;
  virtualMachines: number[];
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
  groupId: number;
}

export interface ServiceAccessPolicy {
  id: number;
  serviceId: number;
  groupId: number;
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
    id: 1,
    name: 'My VM Group #1',
    virtualMachines: [1, 4],
  },
  {
    id: 2,
    name: 'My VM Group #2',
    virtualMachines: [2],
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

export const Services: Service[] = [
  {
    id: 1,
    application: ApplicationKey.FTP,
    groupId: VirtualMachineGroups[0].id,
  },
];

export const ServiceAccessPolicies: ServiceAccessPolicy[] = [
  {
    id: 1,
    serviceId: 1,
    groupId: VirtualMachineGroups[1].id,
  },
];
