import { Column, Entity } from "typeorm";

@Entity("easydesignleft", { schema: "makeshop" })
export class Easydesignleft {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("mediumint", {
    name: "xsize",
    unsigned: true,
    default: () => "'150'",
  })
  xsize: number;

  @Column("varchar", {
    name: "image",
    nullable: true,
    length: 255,
    default: () => "'1,2,3,4,5'",
  })
  image: string | null;
}
