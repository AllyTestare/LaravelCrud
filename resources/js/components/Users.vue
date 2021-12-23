<template>
    <div class="container">
        <div class="row mt-5">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">User Management</h3>

                        <div class="card-tools">
                            <button
                                class="btn btn-success"
                                data-bs-toggle="modal"
                                data-bs-target="#addNew"
                            >
                                Add new <i class="fas fa-user-plus"></i>
                            </button>
                        </div>
                    </div>
                    <!-- /.card-header -->
                    <div class="card-body table-responsive p-0">
                        <table class="table table-hover text-nowrap">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Type</th>
                                    <th>Modify</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>183</td>
                                    <td>John Doe</td>
                                    <td>11-7-2014</td>
                                    <td>
                                        <span class="tag tag-success"
                                            >Approved</span
                                        >
                                    </td>
                                    <td>
                                        <a href="#">
                                            <i class="fa fa-edit yellow"></i>
                                        </a>
                                        |
                                        <a href="#">
                                            <i class="fa fa-trash red"></i>
                                        </a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <!-- /.card-body -->
                </div>
                <!-- /.card -->
            </div>
        </div>
        <!-- Modal -->
        <div
            class="modal fade"
            id="addNew"
            tabindex="-1"
            aria-labelledby="addNewLabel"
            aria-hidden="true"
        >
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="addNewLabel">Add New</h5>
                        <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div class="modal-body">
                        <!-- Campuri add user -->
                        <!-- Name -->
                        <div class="form-group">
                            <input
                                v-model="form.name"
                                type="text"
                                name="name"
                                placeholder="Name"
                                class="form-control"
                            />
                            <div
                                v-if="form.errors.has('name')"
                                v-html="form.errors.get('name')"
                            />
                        </div>
                        <!-- Email -->
                        <div class="form-group">
                            <input
                                v-model="form.email"
                                type="email"
                                name="email"
                                placeholder="Email Address"
                                class="form-control"
                            />
                            <div
                                v-if="form.errors.has('email')"
                                v-html="form.errors.get('email')"
                            />
                        </div>
                        <!-- Bio -->
                        <div class="form-group">
                            <input
                                v-model="form.bio"
                                id="bio"
                                name="bio"
                                placeholder="Short bio for user (Optional)"
                                class="form-control"
                            />
                            <div
                                v-if="form.errors.has('bio')"
                                v-html="form.errors.get('bio')"
                            />
                        </div>
                        <!-- Role -->
                        <div class="form-group">
                            <select
                                name="type"
                                v-model="form.type"
                                id="type"
                                class="form-control"
                                :class="{
                                    'is-invalid': form.errors.has('type'),
                                }"
                            >
                                <option value="">Select User Role</option>
                                <option value="admin">Admin</option>
                                <option value="user">Standard User</option>
                                <option value="author">Author</option>
                            </select>
                            <div
                                v-if="form.errors.has('type')"
                                v-html="form.errors.get('type')"
                            />
                        </div>
                        <!-- Password -->
                        <div class="form-group">
                            <input
                                v-model="form.password"
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Password"
                                class="form-control"
                            />
                            <div
                                v-if="form.errors.has('password')"
                                v-html="form.errors.get('password')"
                            />
                        </div>
                    </div>

                    <div class="modal-footer" bg-black>
                        <button
                            type="button"
                            class="btn btn-danger"
                            data-bs-dismiss="modal"
                        >
                            Close
                        </button>
                        <button type="button" class="btn btn-primary">
                            Create
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            form: new Form({
                name: "",
                email: "",
                password: "",
                type: "",
                bio: "",
                photo: "",
            }),
        };
    },
    mounted() {
        console.log("Component mounted.");
    },
};
</script>
