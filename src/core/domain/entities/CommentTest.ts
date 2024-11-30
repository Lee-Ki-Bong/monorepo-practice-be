import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("comment_test", { schema: "makeshop" })
export class CommentTest {
  @PrimaryGeneratedColumn({ type: "int", name: "uid" })
  uid: number;

  @Column("mediumtext", { name: "path", nullable: true })
  path: string | null;

  @Column("mediumtext", { name: "comment", nullable: true })
  comment: string | null;

  @Column("int", {
    name: "sort",
    nullable: true,
    unsigned: true,
    default: () => "'1'",
  })
  sort: number | null;
}
