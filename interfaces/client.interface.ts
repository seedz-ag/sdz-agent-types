import APIEntity from "./api-entity.interface";

export default interface Client extends APIEntity {
  cnpjOrigemDados: number;
  dataCadastro: Date;
  dataAtualizacao: string;
  id: string;
  razaoSocial: string;
  nomeFantasia: string;
  documento: string;
  situacaoFinanceira: string;
  celular: string;
  telefoneFixo: string;
  telefoneFixo2: string;
  email: string;
  sexo: string;
  dataNascimento: string;
  inscEstadual: string;
  pais: string;
  nomeContato: string;
  rg: string;
  inscMunicipal: string;
  vendedor1: string;
  vendedor2: string;
  tipo: string;
  grupo: string;
  classe: string;
  site: string;
  grupoEmpresarial: string;
  car: string;
  simples: string;
  contIcms: string;
  recIr: string;
  origem: string;
  regiao: string;
}
