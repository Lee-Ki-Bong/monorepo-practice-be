import { Column, Entity, Index } from "typeorm";

@Index("NAME", ["addr1", "addr2"], {})
@Entity("post", { schema: "makeshop" })
export class Post {
  @Column("varchar", { name: "post", length: 6 })
  post: string;

  @Column("varchar", { name: "addr1", length: 50 })
  addr1: string;

  @Column("varchar", { name: "addr2", length: 100 })
  addr2: string;
}
