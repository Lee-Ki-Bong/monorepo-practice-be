import { Column, Entity } from "typeorm";

@Entity("post_num", { schema: "makeshop" })
export class PostNum {
  @Column("varchar", { name: "zipcode", nullable: true, length: 8 })
  zipcode: string | null;

  @Column("varchar", { primary: true, name: "sido", length: 20 })
  sido: string;

  @Column("varchar", { primary: true, name: "gugun", length: 20 })
  gugun: string;

  @Column("varchar", { primary: true, name: "dong", length: 20 })
  dong: string;

  @Column("varchar", { name: "brdg", nullable: true, length: 50 })
  brdg: string | null;

  @Column("varchar", { name: "bunj", nullable: true, length: 50 })
  bunj: string | null;
}
