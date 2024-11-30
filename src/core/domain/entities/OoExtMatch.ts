import { Column, Entity, Index } from "typeorm";

@Index("add_detail", ["adminuser", "ordernum", "addType", "addDetail"], {})
@Index("add_type", ["adminuser", "addType", "addDetail"], {})
@Entity("oo_ext_match", { schema: "makeshop" })
export class OoExtMatch {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "ordernum", length: 26 })
  ordernum: string;

  @Column("varchar", { primary: true, name: "add_type", length: 26 })
  addType: string;

  @Column("varchar", { name: "add_detail", length: 255 })
  addDetail: string;
}
