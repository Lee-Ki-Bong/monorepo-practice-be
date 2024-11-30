import { Column, Entity } from "typeorm";

@Entity("user_recmd", { schema: "makeshop" })
export class UserRecmd {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "user_id", length: 20 })
  userId: string;

  @Column("mediumtext", { name: "recmd_id" })
  recmdId: string;

  @Column("int", { name: "recmd_cnt", unsigned: true, default: () => "'0'" })
  recmdCnt: number;

  @Column("mediumtext", { name: "recmd_data" })
  recmdData: string;
}
