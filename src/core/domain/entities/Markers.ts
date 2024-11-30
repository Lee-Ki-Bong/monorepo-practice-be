import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("markers", { schema: "makeshop" })
export class Markers {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "name", length: 60 })
  name: string;

  @Column("varchar", { name: "address", length: 80 })
  address: string;

  @Column("float", {
    name: "lat",
    precision: 10,
    scale: 6,
    default: () => "'0.000000'",
  })
  lat: number;

  @Column("float", {
    name: "lng",
    precision: 10,
    scale: 6,
    default: () => "'0.000000'",
  })
  lng: number;
}
