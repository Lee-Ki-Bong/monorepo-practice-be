import { Column, Entity } from "typeorm";

@Entity("enuri_category", { schema: "makeshop" })
export class EnuriCategory {
  @Column("int", { primary: true, name: "enuri_level", default: () => "'0'" })
  enuriLevel: number;

  @Column("varchar", { primary: true, name: "enuri_parent", length: 10 })
  enuriParent: string;

  @Column("varchar", { primary: true, name: "enuri_cate", length: 10 })
  enuriCate: string;

  @Column("varchar", { name: "enuri_name", length: 50 })
  enuriName: string;

  @Column("varchar", { name: "enuri_seqno", length: 10 })
  enuriSeqno: string;

  @Column("datetime", {
    name: "enuri_regdate",
    default: () => "'0000-00-00 00:00:00'",
  })
  enuriRegdate: Date;
}
