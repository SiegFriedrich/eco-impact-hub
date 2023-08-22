export type ProjectModel = {
    projectId:number;
    title: string;
    category:string;
    description: string;
    image:string,

    //Sustainable Development Contributions
    sdgContributions:number[];

    //Project Details
    projectType:string;
    mechanism: string;
    location:string;
    developer:string;
    website:string;

    //Todo
    //google maps information 

    //Certification
    registry:string;
    status:string;
    URL:string;
    validator:string;
    startDate: string;
    endDate:string;
};

export type SaleInfo = {
    projectId:number;
    vintage: number;
    price: number;
    volume: number;
    availableStock: number;
    minimunPurchase: number;
    transactionFee: number;
    VAT:number;
}

export type BidInfo = {
    offerPrice:number;
    volumeOfCredit:number;
    vintage:number;
    massage?:string;
}

export const dummypProjects: ProjectModel[] = [{
    projectId : 1001,
    title: 'One-to-Tree',
    category:'AFFORESTATION',
    description: 'The "One-to-Tree" initiative is a visionary tree planting project focused on addressing climate change and fostering ecological restoration. This innovative project aims to convert underutilized spaces into thriving forests, strategically planting trees that serve as powerful carbon sinks. Through community involvement, educational campaigns, and rigorous monitoring, "One-to-Tree" seeks to not only mitigate carbon emissions but also cultivate a renewed sense of environmental responsibility. Each tree planted symbolizes a step towards a more sustainable future, uniting individuals and communities in the global fight against climate change.',
    image: 'https://',
    //Sustainable Development Contributions
    sdgContributions:[1,13,15],

    //Project Details
    projectType:'Afforestation',
    mechanism: 'Removal',
    location:'Cebu, Philippines',
    developer:'Tree Planters, Inc.',
    website:'www.treeplanters.com',

    //Todo
    //google maps information 

    //Certification
    registry: 'Verra Registry',
    status: 'Registered',
    URL: 'Verra Registry',
    validator: 'DNV',
    startDate: 'January 11, 2018',
    endDate: 'January 11, 2018',
},
{
    projectId : 1002,
    title: 'Improved Cookstoves',
    category:'ENERGY EFFICIENCY',
    description: 'The "One-to-Tree" initiative is a visionary tree planting project focused on addressing climate change and fostering ecological restoration. This innovative project aims to convert underutilized spaces into thriving forests, strategically planting trees that serve as powerful carbon sinks. Through community involvement, educational campaigns, and rigorous monitoring, "One-to-Tree" seeks to not only mitigate carbon emissions but also cultivate a renewed sense of environmental responsibility. Each tree planted symbolizes a step towards a more sustainable future, uniting individuals and communities in the global fight against climate change.',
    image: 'https://',
    
    //Sustainable Development Contributions
    sdgContributions:[1,13,15],

    //Project Details
    projectType:'Afforestation',
    mechanism: 'Removal',
    location:'Cebu, Philippines',
    developer:'Tree Planters, Inc.',
    website:'www.treeplanters.com',

    //Todo
    //google maps information 

    //Certification
    registry: 'Verra Registry',
    status: 'Registered',
    URL: 'Verra Registry',
    validator: 'DNV',
    startDate: 'January 11, 2018',
    endDate: 'January 11, 2018',
}
]