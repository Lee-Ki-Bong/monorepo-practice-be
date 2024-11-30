import { Column, Entity } from "typeorm";

@Entity("edge_point", { schema: "makeshop" })
export class EdgePoint {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("enum", {
    name: "point_type",
    enum: ["", "C", "F"],
    default: () => "'C'",
  })
  pointType: "" | "C" | "F";

  @Column("int", { name: "point", default: () => "'0'" })
  point: number;

  @Column("datetime", {
    primary: true,
    name: "point_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  pointDate: Date;
}
