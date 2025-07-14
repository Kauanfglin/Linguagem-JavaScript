class ResourceProcessorStation {
  constructor(name, monthlyProcessing) {
    this.name = name;
    this.monthlyProcessing = monthlyProcessing;
  }

  static calculateProcessInHours(monthlyProcessing, hours) {
    return (monthlyProcessing / 720) * hours;
  }
}

// Usando o método estático corretamente
let totalProcessing = ResourceProcessorStation.calculateProcessInHours(100, 720);
console.log("Total Processing:", totalProcessing); // 100

// Criando uma instância
let processor = new ResourceProcessorStation("Processor", 100);

// Usando os dados da instância no método estático
let partialProcessing = ResourceProcessorStation.calculateProcessInHours(processor.monthlyProcessing, 100);
console.log("Partial Processing (100h):", partialProcessing); // Deve retornar ~13.88
