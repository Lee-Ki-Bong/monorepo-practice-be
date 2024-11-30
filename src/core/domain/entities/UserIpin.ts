import { Column, Entity, Index } from "typeorm";

@Index("cid", ["adminuser", "cid"], {})
@Entity("user_ipin", { schema: "makeshop" })
export class UserIpin {
  @Column("char", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("char", { primary: true, name: "id", length: 12 })
  id: string;

  @Column("char", { name: "did", length: 64 })
  did: string;

  @Column("char", { name: "cid", length: 88 })
  cid: string;
}
