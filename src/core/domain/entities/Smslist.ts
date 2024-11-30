import { Column, Entity, Index } from "typeorm";

@Index("groupkey", ["adminuser", "groupid"], {})
@Index("hnamekey", ["adminuser", "hname"], {})
@Entity("smslist", { schema: "makeshop" })
export class Smslist {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { name: "id", nullable: true, length: 20 })
  id: string | null;

  @Column("varchar", { name: "hname", nullable: true, length: 100 })
  hname: string | null;

  @Column("varchar", { primary: true, name: "tel", length: 14 })
  tel: string;

  @Column("varchar", { name: "groupid", length: 32 })
  groupid: string;

  @Column("varchar", { name: "memo", nullable: true, length: 155 })
  memo: string | null;

  @Column("varchar", { name: "date", nullable: true, length: 12 })
  date: string | null;
}
