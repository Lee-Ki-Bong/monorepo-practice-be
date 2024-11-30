import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_cs_uid", ["csUid"], {})
@Entity("collection_set", { schema: "makeshop" })
export class CollectionSet {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "cs_uid", unsigned: true })
  csUid: number;

  @Column("varchar", { name: "cs_name", length: 255 })
  csName: string;

  @Column("mediumtext", { name: "cs_collection", nullable: true })
  csCollection: string | null;
}
