import { Column, Entity } from "typeorm";

@Entity("yk_nodeli_post", { schema: "makeshop" })
export class YkNodeliPost {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "post", length: 7 })
  post: string;
}
