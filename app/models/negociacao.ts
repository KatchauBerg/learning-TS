export class Negociacao {

  constructor(private _data: Date,
              public readonly quantidade: number, 
              public readonly valor: number
  ) {}

  //Getters retornam os valores das propriedades privadas apenas
  get volume(): number{

    return this.quantidade * this.valor
  }

  get data(): Date{

    const data = new Date(this._data.getTime())
    return data
  }
}
