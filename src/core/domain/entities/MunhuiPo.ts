import { Column, Entity } from "typeorm";

@Entity("munhui_po", { schema: "makeshop" })
export class MunhuiPo {
  @Column("int", { primary: true, name: "gid", default: () => "'0'" })
  gid: number;

  @Column("tinyint", { primary: true, name: "uid", default: () => "'0'" })
  uid: number;
}
