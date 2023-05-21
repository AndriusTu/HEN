﻿// <auto-generated />
using System;
using Hen.DAL;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace Hen.DAL.Migrations
{
    [DbContext(typeof(DataContext))]
    [Migration("20230519122956_optimistic locking")]
    partial class optimisticlocking
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder.HasAnnotation("ProductVersion", "7.0.5");

            modelBuilder.Entity("Hen.DAL.Entities.AccountEntity", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("TEXT");

                    b.Property<Guid>("AccountInformationId")
                        .HasColumnType("TEXT");

                    b.Property<DateTime>("CreatedAt")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("timestamp")
                        .HasDefaultValueSql("CURRENT_TIMESTAMP");

                    b.Property<byte[]>("PasswordHash")
                        .IsRequired()
                        .HasColumnType("varbinary(20)");

                    b.Property<byte[]>("PasswordSalt")
                        .IsRequired()
                        .HasColumnType("varbinary(32)");

                    b.Property<int>("Role")
                        .HasColumnType("nvarchar(16)");

                    b.Property<int>("Status")
                        .HasColumnType("nvarchar(16)");

                    b.Property<DateTime>("UpdatedAt")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("timestamp")
                        .HasDefaultValueSql("CURRENT_TIMESTAMP");

                    b.Property<string>("Username")
                        .IsRequired()
                        .HasColumnType("nvarchar(32)");

                    b.HasKey("Id");

                    b.HasIndex("AccountInformationId");

                    b.ToTable("Account", (string)null);
                });

            modelBuilder.Entity("Hen.DAL.Entities.LocationEntity", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("TEXT");

                    b.Property<string>("City")
                        .HasColumnType("nvarchar(32)");

                    b.Property<string>("Country")
                        .HasColumnType("nvarchar(32)");

                    b.Property<DateTime>("CreatedAt")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("timestamp")
                        .HasDefaultValueSql("CURRENT_TIMESTAMP");

                    b.Property<string>("Description")
                        .HasColumnType("nvarchar(256)");

                    b.Property<int?>("FlatNumber")
                        .HasColumnType("integer");

                    b.Property<int?>("HouseNumber")
                        .HasColumnType("integer");

                    b.Property<string>("PostalCode")
                        .HasColumnType("nvarchar(16)");

                    b.Property<string>("Street")
                        .HasColumnType("nvarchar(32)");

                    b.Property<int>("Type")
                        .HasColumnType("nvarchar(32)");

                    b.Property<DateTime>("UpdatedAt")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("timestamp")
                        .HasDefaultValueSql("CURRENT_TIMESTAMP");

                    b.HasKey("Id");

                    b.ToTable("Location", (string)null);
                });

            modelBuilder.Entity("Hen.DAL.Entities.ParcelEntity", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("TEXT");

                    b.Property<Guid?>("CourierId")
                        .HasColumnType("integer");

                    b.Property<DateTime>("CreatedAt")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("timestamp")
                        .HasDefaultValueSql("CURRENT_TIMESTAMP");

                    b.Property<string>("Description")
                        .HasColumnType("nvarchar(256)");

                    b.Property<DateTime>("ETA")
                        .HasColumnType("timestamp");

                    b.Property<Guid>("ReceiverId")
                        .HasColumnType("integer");

                    b.Property<Guid>("SenderId")
                        .HasColumnType("integer");

                    b.Property<int>("Size")
                        .HasColumnType("INTEGER");

                    b.Property<int>("Type")
                        .HasColumnType("nvarchar(16)");

                    b.Property<DateTime>("UpdatedAt")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("timestamp")
                        .HasDefaultValueSql("CURRENT_TIMESTAMP");

                    b.Property<Guid>("Version")
                        .IsConcurrencyToken()
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.HasIndex("CourierId");

                    b.HasIndex("ReceiverId");

                    b.HasIndex("SenderId");

                    b.ToTable("Parcel", (string)null);
                });

            modelBuilder.Entity("Hen.DAL.Entities.ParcelStatusEntity", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("TEXT");

                    b.Property<DateTime>("CreatedAt")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("timestamp")
                        .HasDefaultValueSql("CURRENT_TIMESTAMP");

                    b.Property<string>("Description")
                        .HasColumnType("nvarchar(256)");

                    b.Property<Guid>("LocationId")
                        .HasColumnType("TEXT");

                    b.Property<int>("Status")
                        .HasColumnType("nvarchar(32)");

                    b.HasKey("Id");

                    b.HasIndex("LocationId");

                    b.ToTable("ParcelStatus", (string)null);
                });

            modelBuilder.Entity("Hen.DAL.Entities.ParcelStatusGroupEntity", b =>
                {
                    b.Property<Guid>("ParcelId")
                        .HasColumnType("TEXT");

                    b.Property<Guid>("StatusId")
                        .HasColumnType("TEXT");

                    b.HasKey("ParcelId", "StatusId");

                    b.HasIndex("StatusId");

                    b.ToTable("ParcelStatusGroup", (string)null);
                });

            modelBuilder.Entity("Hen.DAL.Entities.UserEntity", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("TEXT");

                    b.Property<DateTime>("CreatedAt")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("timestamp")
                        .HasDefaultValueSql("CURRENT_TIMESTAMP");

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasColumnType("nvarchar(32)");

                    b.Property<Guid?>("LocationId")
                        .HasColumnType("TEXT");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("nvarchar(32)");

                    b.Property<string>("Phone")
                        .IsRequired()
                        .HasColumnType("nvarchar(32)");

                    b.Property<DateTime>("UpdatedAt")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("timestamp")
                        .HasDefaultValueSql("CURRENT_TIMESTAMP");

                    b.HasKey("Id");

                    b.HasIndex("LocationId");

                    b.ToTable("User", (string)null);
                });

            modelBuilder.Entity("Hen.DAL.Entities.AccountEntity", b =>
                {
                    b.HasOne("Hen.DAL.Entities.UserEntity", "AccountInformation")
                        .WithMany()
                        .HasForeignKey("AccountInformationId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("AccountInformation");
                });

            modelBuilder.Entity("Hen.DAL.Entities.ParcelEntity", b =>
                {
                    b.HasOne("Hen.DAL.Entities.AccountEntity", "Courier")
                        .WithMany()
                        .HasForeignKey("CourierId");

                    b.HasOne("Hen.DAL.Entities.UserEntity", "Receiver")
                        .WithMany()
                        .HasForeignKey("ReceiverId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Hen.DAL.Entities.UserEntity", "Sender")
                        .WithMany()
                        .HasForeignKey("SenderId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Courier");

                    b.Navigation("Receiver");

                    b.Navigation("Sender");
                });

            modelBuilder.Entity("Hen.DAL.Entities.ParcelStatusEntity", b =>
                {
                    b.HasOne("Hen.DAL.Entities.LocationEntity", "Location")
                        .WithMany()
                        .HasForeignKey("LocationId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Location");
                });

            modelBuilder.Entity("Hen.DAL.Entities.ParcelStatusGroupEntity", b =>
                {
                    b.HasOne("Hen.DAL.Entities.ParcelEntity", "Parcel")
                        .WithMany("DeliveryStatuses")
                        .HasForeignKey("ParcelId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Hen.DAL.Entities.ParcelStatusEntity", "Status")
                        .WithMany()
                        .HasForeignKey("StatusId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Parcel");

                    b.Navigation("Status");
                });

            modelBuilder.Entity("Hen.DAL.Entities.UserEntity", b =>
                {
                    b.HasOne("Hen.DAL.Entities.LocationEntity", "Location")
                        .WithMany()
                        .HasForeignKey("LocationId");

                    b.Navigation("Location");
                });

            modelBuilder.Entity("Hen.DAL.Entities.ParcelEntity", b =>
                {
                    b.Navigation("DeliveryStatuses");
                });
#pragma warning restore 612, 618
        }
    }
}
